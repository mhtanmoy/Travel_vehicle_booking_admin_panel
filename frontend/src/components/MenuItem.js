import React, { useState } from 'react'

const MenuItem = (props) => {
    const { name, subMenus } = props;
    const [expand, setExpand] = useState(false);

    return (
        <div>
            <li >
                <a onClick={()=> setExpand(!expand)} className="menu-item">
                    <div className="menu-icon">
                        <i class="bi bi-window-plus"></i>
                    </div>
                    <span>{name}</span>
                </a>
                {subMenus && subMenus.length > 0 ? (
                    <ul className={`sub-menu ${expand ? "active" : ""}`}>
                        {subMenus.map((menu, index) => (
                            <li key={index}>
                                <a>
                                    {menu.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                ) : null}
            </li>
        </div>
    )
}

export default MenuItem
