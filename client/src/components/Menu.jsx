import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCSS.css';
import { useContext } from "react";
import UsersContext from "../userContext";

export const Menu = () => {
  const { loggedInUser, userList } = useContext(UsersContext);
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-top border-bottom border-light" id='mainNav'>
          <div className="container">
              
              <li className="nav-item">
                  <Link className="nav-link active fw-bold" to="login">
                    <img src={`http://localhost:7777/pic/1000.jpg`} className='navbar-logo-tamar'/>
                  </Link>
              </li>

              {/* הצגת שם המשתמש שמחובר */}
              {loggedInUser && (
                <span className="navbar-text ms-3">
                  שלום {loggedInUser.userName}
                </span>
              )}

              <ul className="navbar-nav mb-2 mr-auto">

                {/*לינק לדף הוסף מתכון*/}
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" to="addRecipe">
                    הוסף מתכון
                  </Link>
                </li>

                {/*לינק לדף התחברות*/}
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" to="register">
                    הרשמה
                  </Link>
                </li>

                {/*לינק לדף הצגת משתמשים*/}
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" to="userList">
                    משתמשים
                  </Link>
                </li>

                {/*לינק לדף הצגת משתמשים*/}
                <li className="nav-item">
                  <Link className="nav-link active fw-bold" to="recipeList">
                    מתכונים
                  </Link>
                </li>

                {/*לינק לדף הראשי*/}
                <li className="nav-item ">
                  <Link className="nav-link active fw-bold" to="home">
                    דף הבית
                  </Link>
                </li>

              </ul>

            </div>
        </nav>

    </div>
  );
};
