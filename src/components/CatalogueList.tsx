import catalogueList from "../mock-data/catalogueList.json";
import CatalogueListItem from "./CatalogueListItem";

const CatalogueList = () => {
    
    return (
        <div className="w-full overflow-y-scroll px-4 h-[80%]">
            {
                catalogueList.data.map((item) => {
                    return <CatalogueListItem key={item.id} title={item.title} category={item.category} amount={item.amount} paid={item.paid}/>
                })
            }
        </div>
    )
}

export default CatalogueList;