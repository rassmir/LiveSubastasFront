import React, {Fragment} from "react";
import SidebarAdmin from "./layout/SidebarAdmin";
import {useDispatch, useSelector} from "react-redux";
const Index = () => {
    const dispatch = useDispatch();
      return(
          <Fragment>
              <SidebarAdmin>
                  haha
              </SidebarAdmin>
          </Fragment>
      )
}
export default Index