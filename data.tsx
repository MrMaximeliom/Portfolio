import { IService } from '@/interfaces/IService'
import { FaServer } from 'react-icons/fa'
import {RiComputerLine} from 'react-icons/ri'
import { AiOutlineApi } from 'react-icons/ai'

export const services:IService[] = [
    {
        title:"Backend Development",
        about:"I can  handle database, server using <b>.NET Core Framework </b> and other popular frameworks",
      
        icon: FaServer,
    },
    {
        title:"Frontend Development",
        about:"I can build a beautiful and scalable SPA using <b>HTML</b>,<b>css</b> and <b>React</b>",
        icon: RiComputerLine,
    },
    {
        title:"API Development",
        about:"I can develop robust APIs using <b>.NET Core Framework</b> and <b>Django Rest Framework</b>",
        icon: AiOutlineApi,
    }
]