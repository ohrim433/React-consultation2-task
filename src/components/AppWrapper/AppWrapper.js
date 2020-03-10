import React, { useState } from 'react';
import { SortingContext, ThemeContext } from '../../context';
import { sortingTypes } from '../../constants';
import { AppConfigContext, UserContext } from "../../context";
import { allLinks, user} from "../../constants";
// todo: импортнуть контекст { AppConfigContext, UserContext } из '../../context'
// todo: импортнуть объект { allLinks, user }  из '../../constants'

export function AppWrapper(props) {
  const [sortType, setSortType] = useState(sortingTypes.BY_DEFAULT);

  const [userRole, setUserRole] = useState(user.role);

    const toggleUserRole = () => {
        if (userRole === 'admin') {
            setUserRole('user');
        } else if (userRole === 'user') {
            setUserRole('admin');
        }
    };

  const onSortingChange = (value) => {
    setSortType(value);
  };

  return (
    // todo: использовать здесь AppConfigContext.Provider, как value передать allLinks
    // todo: использовать здесь UserContext.Provider, как value передать user
      <AppConfigContext.Provider value={ allLinks }>
          <UserContext.Provider value={ { user: {...user, role: userRole}, toggleUserRole } }>
          <ThemeContext.Provider value={'light'}>
              <SortingContext.Provider value={{
                  sortType,
                  onSortingChange
              }}>
                  {props.children}
              </SortingContext.Provider>
          </ThemeContext.Provider>
          </UserContext.Provider>
      </AppConfigContext.Provider>



  );
}