import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isDarkTheme: false,
        lightTheme: {
            color: '#222222',
            backgroundColor: '#D8DDF1',
        },
        darkTheme: {
            color: "#FFFFFF",
            backgroundColor: "#483D8B",
        }
    };

    changeTheme = () => {
        this.setState({ isDarkTheme: !this.state.isDarkTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}


export default ThemeContextProvider;

