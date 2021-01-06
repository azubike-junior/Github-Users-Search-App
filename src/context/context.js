import React, { useState, useEffect, createContext} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [githubRepos, setMockRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [requests, setRequests] = useState(0);
    const [errors, setErrors] = useState({ show: false, msg: '' });
    const [isLoading, setIsLoading] = useState(false)

    const checkRequests = () => {
        axios.get(`${rootUrl}/rate_limit`).then(({ data }) => {
            let { rate: { remaining } } = data;
            setRequests(remaining);
            if (remaining === 0) {
                toggleError(true, "sorry, you have exceeded your requests")
            }
        })
        .catch((e) => console.log(e))
    };

    const toggleError = (show = false, msg = '') => {
        setErrors({show, msg})
    }

    const searchGithubUser = async (user) => {
        toggleError()
        setIsLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`).catch((e) => console.log(e));
        if (response) {
            setGithubUser(response.data);
            const { login, followers_url } = response.data;

            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`)
            ]).then(results => {
                const [repos, followers] = results;
                if (repos.status === 'fulfilled') {
                    setMockRepos(repos.value.data)
                }
                 if (followers.status === 'fulfilled') {
                    setFollowers(followers.value.data)
                }
            }).catch(e => console.log(e))
        } else {
            toggleError(true, 'there is no user with the username');
        }
        checkRequests();
        setIsLoading(false)
    };

    useEffect(checkRequests, [])

    return (
        <GithubContext.Provider
        value={{githubUser, githubRepos, followers, requests, errors, searchGithubUser, isLoading}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}
