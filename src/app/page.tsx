import { GetStaticPropsContext } from "next";
import { services } from "../../data";
const index = () => {
  const services = getServices()


  return (
    <div className="tex-color-red">
      
      Hello Moayed
    </div>
  )
}
export default index;

async function getServices() {
  const res = await fetch('http://localhost:3000/api/services')
  return res.json()

}