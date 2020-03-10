import React from 'react';
//todo: импортнуть { UserContext, AppConfigContext } из '../../context'
import { UserContext, AppConfigContext} from "../../context";
import './Header.scss';
import {Userinfo} from "../Userinfo/Userinfo";

// todo:
//  1) создать функциональный компонент Header, не забудьте сделать export этого компонента
//  2) обвернуть возвращаемый jsx в UserContext.Consumer и AppConfigContext.Consumer
//  детальнее как правильно обвернуть тут: https://ru.reactjs.org/docs/context.html#consuming-multiple-contexts
//  3) Header должен возвращать список (c помощью .map) на основе того, какая роль у пользователя (user.role) и allLinks
//  т.е. если user.role === 'admin' - возвращаемый список на основе allLinks.admin, если user.role === 'user' - список  allLinks.user
//  4) используйте этот компонент Header в App.js

// import React from 'react';

export function Header() {
    return (
            <UserContext.Consumer>
                {({user, toggleUserRole}) => (
                    <AppConfigContext.Consumer>
                        {links =>
                            (
                                <div>
                                    <div>
                                        {
                                            user.role === 'admin' ? links.admin.map((value, i) =>
                                                { return (<button className="btn-primary" key={ i }>{` ${value.label} `}</button> ) }) :
                                                (user.role === 'user') ? links.user.map((value, i) =>
                                                { return ( <button className="btn-primary" key={ i }>{ ` ${value.label} `}</button> ) }) : null
                                        }
                                    </div>
                                    <Userinfo/>
                                </div>)

                        }
                        </ AppConfigContext.Consumer>

                )}

                </UserContext.Consumer>
    );
}

// export default Header;

