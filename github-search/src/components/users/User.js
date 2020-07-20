import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-dark'>
        Back to search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i
          className='fas fa-check text-success'
          style={{ fontSize: '1.5rem' }}
        />
      ) : (
        <i
          className='fas fa-times-circle text-danger'
          style={{ fontSize: '1.5rem' }}
        />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>
            Username: <strong>{login}</strong>
          </p>
          <p>
            Location: <strong>{location}</strong>
          </p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h2>Bio</h2>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            View profile on Github
          </a>
          <ul>
            <li>
              {company && (
                <Fragment>
                  Company: <strong>{company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <a href={blog} style={{ color: 'black' }}>
                    Website: <strong>{blog}</strong>
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-danger'>Following: {following}</div>
        <div className='badge badge-light'>
          Public repositories: {public_repos}
        </div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
