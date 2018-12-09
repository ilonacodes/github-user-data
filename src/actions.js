export const t = {
    LOAD_USER_DATA: 'LOAD_USER_DATA',
    LOAD_USER_DATA_SUCCESS: 'LOAD_USER_DATA_SUCCESS'
};

export const actions = ({
    loadUserData: name => ({
        type: t.LOAD_USER_DATA,
        name
    }),

    loadUserDataSuccess: data => ({
        type: t.LOAD_USER_DATA_SUCCESS,
        data
    })
});