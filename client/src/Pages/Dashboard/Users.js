import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Looding from '../Shared/Looding';

const Users = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://calm-crag-79486.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));
    if (isLoading) {
        return <Looding></Looding>
    }
    const makeAdmin = (email) => {
        fetch(`https://calm-crag-79486.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('Operation Faild');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('make admin successfull');
                    console.log(data);
                    refetch();
                }
            })
    }
    return (
        <div>
            <h2 className="text-3xl">All Users: {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>

                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{
                                    user.role !== 'admin' &&
                                    <button class="btn btn-xs" onClick={() => makeAdmin(user.email)}>Make Admin</button>}</td>
                                <td><button class="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;