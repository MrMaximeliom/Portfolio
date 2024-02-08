import { Category } from "@/DataTypes/Category";
import { FunctionComponent } from "react";

const ProjectsNavbarItem:FunctionComponent<{
    value:Category | 'All',
     handleFilterCategory:Function,
     active:string,
     setShowDetail:Function,
    
    }> = ({value,handleFilterCategory,active,setShowDetail}) => {
    let className = "cursor-pointer hover:text-green capitalize"
    if(active === value)
    className += " text-green"
    return(
        <li className={className} onClick={()=>
            {
                handleFilterCategory(value),
                setShowDetail(null)

            }
        }>
            {value}
            
        </li>
    )

}
export default ProjectsNavbarItem;