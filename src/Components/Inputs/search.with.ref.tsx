import { filterAction, searchAction } from "Stores/Actions"
import { useDispatch } from "react-redux"
import { forwardRef, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchWithRefs = forwardRef((props:any, ref: any) => {
  {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handleSearch = (searchInput: string) => {
      setInputValue(searchInput)
      navigate("/search")
      dispatch(searchAction(searchInput))
      dispatch(filterAction(""))
    }
  
    return (
      <div className="search-bar">
        <input type="text" 
        ref={ref}
        value={inputValue} 
        onChange={ (e) => {handleSearch(e.target.value)}} 
        placeholder={props.placeholder} 
         />
      </div>
    )
  }
})

export default SearchWithRefs