import  IService   from "@/interfaces/IService"
import { FunctionComponent } from "react"

const ServiceCard:FunctionComponent<{service:IService}> = ({
    
    service:{Icon,about,title},

}) =>{
    function createMarkup() {
        return {
           __html: about,
        }
     }
    return (
        <div className="p-2 flex items-center space-x-4">
           <Icon className="w-12 h-12 text-green"/>
            <div>
                <h4 className="font-bold">{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>

        </div>
    )

}
export default ServiceCard