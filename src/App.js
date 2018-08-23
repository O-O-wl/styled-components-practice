import React from 'react'
import Button from './Button/Button'
import StyledButton from './StyledButton';


class App extends React.Component{
render(){
    const big =true;
    return(
    <div>
        < StyledButton big={big} > 버튼 </ StyledButton>
        </div> 


    )
}




}
export default App;