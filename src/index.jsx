import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './components/App.jsx';
import { abil_reducer } from './reducers/abil_reducer.js';
import { level_reducer } from './reducers/level_reducer.js';
import { name_reducer } from './reducers/name_reducer.js';
import { user_reducer } from './reducers/user_reducer.js';
import { character_list_reducer } from './reducers/character_list_reducer.js';

const rootReducer = combineReducers({
    abils: abil_reducer,
    levels: level_reducer,
    name: name_reducer,
    user: user_reducer,
    character_list: character_list_reducer
});

var initial_state = {
    abils: {
        str: {
            name: 'Strength',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        },
        con: {
            name: 'Constitution',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        },
        int: {
            name: 'Intelligence',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        },
        dex: {
            name: 'Dexterity',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        },
        wis: {
            name: 'Wisdom',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        },
        cha: {
            name: 'Charisma',
            score: 10,
            racial: false,
            bonus: 0,
            mod: 0
        }
    },
    levels: {
        level: 1
    },
    name: '',
    user: {
        email: '',
        userId: ''
    },
    character_list: []
}
const store = createStore(rootReducer, initial_state);

function mapStateToProps(state) {
    return {
        abils: state.abils,
        levels: state.levels,
        name: state.name,
        user: state.user,
        store: state,
        character_list: state.character_list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateAbils: (abil_action) => dispatch(abil_action),
        updateLevels: (level_action) => dispatch(level_action),
        updateName: (name_action) => dispatch(name_action),
        updateUser: (user_action) => dispatch(user_action),
        updateCharacterList: (character_action) => dispatch(character_action)
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('app')
);

