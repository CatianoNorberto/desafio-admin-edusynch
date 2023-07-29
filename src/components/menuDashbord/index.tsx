'use client'

import Link from "next/link";
import Image from "next/image";

import Tooltip from "../Tooltip"
import { menu } from "../../data";

import {
  MenuContainer,
  MenuContents
}from './style'

const Menu = () => {
  return (
    <MenuContainer>
      {menu?.map((item) => (
        <MenuContents key={item.id}>
          <span>{item.title}</span>
          {item.listItems.map((listItem) => (
            <Tooltip 
              title="Transfer Crypto" 
              placement="right-start" 
              key={listItem.id}
            >
              <Link href={listItem.url}>
                <Image src={listItem.icon} alt="" width={32} height={32}/>
                {/* <span className="listItemTitle">{listItem.title}</span> */}
              </Link>
            </Tooltip>
          ))}
        </MenuContents>
      ))}
    </MenuContainer>
  );
};

export default Menu;
