import { useId } from "react"
import searchStyles from "./SearchBox.module.css"

export default function SearchBox({value, onFilter}) {
    const searchNameId = useId();

    return (
        <div className={searchStyles.searchBox}>
            <label htmlFor={searchNameId}>Find contacts by name</label>
            <input type="text" name="searchByName" id={searchNameId} value={value} onChange={(e) => onFilter(e.target.value)} className={searchStyles.textInput}></input>
        </div>
    )
}