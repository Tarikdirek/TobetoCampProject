import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from "semantic-ui-react";

export default function SingedIn({signOut}) {
  return (
    <div>
      <MenuItem>
        <Image
          avatar
          spaced="right"
          src="https://media.licdn.com/dms/image/D4E03AQE72sx9uF9ZEQ/profile-displayphoto-shrink_400_400/0/1692050933487?e=1709164800&v=beta&t=bF25bMRcC0o0h-DtT8UNZWO4VcP_X5qBaG9mIc0glns"
        />
        <Dropdown pointing='top left' text="TARIK">
          <DropdownMenu>
            <DropdownItem text="Bilgilerim" icon="info"/>
            <DropdownItem onClick={signOut} text="Cikis Yap" icon="sign-out" />
        </DropdownMenu>  
        </Dropdown>
        
      </MenuItem>
    </div>
  );
}
