import React, { Component } from 'react'

const PeopleContext = React.createContext({
    women: {
        sex: '1',
        position: '1',
        hobbies: '1'
    },
    man: {
        sex: '2',
        position: '2',
        hobbies: '2'
    }
})

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            people: {
                women: {
                    sex: 'femal',
                    position: '护士',
                    hobbies: '做饭'
                },
                man: {
                    sex: 'meal',
                    position: '医生',
                    hobbies: '打球'
                }
            }
        }
    }

    render() {
        return (
            <div>
                <PeopleContext.Provider value={this.state.people}>
                    
                </PeopleContext.Provider>
                <Person />
            </div>
        )
    }
}

class Person extends Component {

    render() {
        return (
            <div>
                <h2>人类表单</h2>
                <hr />
                <Women />
                <hr />
                <Man />
            </div>
        )
    }
}

function Women() {

    return (
        <div>
            <PeopleContext.Consumer>
                {
                    value => {
                        const { sex, position, hobbies } = value.women
                        return (
                            <div>
                                <h2>性别：{sex}</h2>
                                <h2>职务：{position}</h2>
                                <h2>爱好：{hobbies}</h2>
                            </div>
                        )
                    }
                }

            </PeopleContext.Consumer>
        </div>
    )
}

class Man extends Component {
    // static contextType = PeopleContext
    render() {
        const { sex, position, hobbies } = this.context.man
        console.log(this.context);
        return (
            <div>
                <h2>性别：{sex}</h2>
                <h2>职务：{position}</h2>
                <h2>爱好：{hobbies}</h2>
            </div>
        )
    }
}
Man.contextType = PeopleContext