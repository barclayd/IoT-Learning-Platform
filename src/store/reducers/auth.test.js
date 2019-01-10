import React from 'react';
import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            email: null,
            loading: false,
            authRedirect: '/dashboard',
            role: ''
        })
    });

    it('should store token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirect: '/dashboard'
        }, {
            type:actionTypes.AUTH_SUCCESS,
            token: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirect: '/dashboard'
        });
    });
});
