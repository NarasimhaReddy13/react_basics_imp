import './App.css';

import FunComp from './1_FunClassBindCssForm.js/1_FunCompArrowProps';
import { Props } from './1_FunClassBindCssForm.js/1_FunCompArrowProps';
import ClassCompProps from './1_FunClassBindCssForm.js/2_ClassProps';
import CounterSetState from './1_FunClassBindCssForm.js/3_CounterSetState';
import ClassStateBinding from './1_FunClassBindCssForm.js/4_BindStateMethods';
import ParentComponent from './1_FunClassBindCssForm.js/5_1_ParentComp';
import NamesListIdorIndex from './2_UserListAndIndexPrac/11_1_List (id or index)';
import Inline from './2_UserListAndIndexPrac/12_2_CSSandInlineStyles'
import Form from './1_FunClassBindCssForm.js/7_Form';
// import UpdatingLifeCycle from './FunClassBindCssForm.js/D_2_UpdatingPhase';
import ParentComponentPure from './1_FunClassBindCssForm.js/8_2_ParentComponent(Pure)';
import InputRefs, { CallBackRefs } from './1_FunClassBindCssForm.js/9_1_RefsInClass';
import ForwRefParent from './1_FunClassBindCssForm.js/9_3_ForwardingRefs(parent)';
import ReactPortals from './1_FunClassBindCssForm.js/11_ReactPortals';
import ErrorHandlePhase from './1_FunClassBindCssForm.js/10_1_ErrorHandlingPhase';
import ErrorBoundary from './1_FunClassBindCssForm.js/10_2_ErrorBoundary';


import ClickCounterHoc from './4_HOC/16_ClickCounter'
import MouseOverHoc from './4_HOC/17_onMouseOver'


import UserRenderProps from './5_RenderProps/UserRenderProps';
import CounterRenderProps from './5_RenderProps/CounterRenderProps';
import ClickCounterRenderProps from './5_RenderProps/ClickCounterRenderProps';
// import ComponentA from './ReactContext/A_1_ComponentA';

import { BasicTable } from './7_ReactTables/BasicTable';
import { SortedTable } from './7_ReactTables/SortingTable';
import { FilteringTable } from './7_ReactTables/FilteringTable';
import { PaginationTable } from './7_ReactTables/PaginationTable';
import { ColumnHiding } from './7_ReactTables/ColumnHiding';
import BackgroundComp from './todoapp/backgroundcomp/BackgroundComp';



import TodoTest from './jest-testing/TodoTest';


function App() {
  const todoData = [
    {id: 1, title: 'Wash Dishes', completed: false},
    {id: 2, title: 'Wash Car', completed: true}
  ];

  return (
    <div className="App">

      <FunComp name='Narasimha' lName = ' Reddy'/>
      
      <Props name='Narasimha' lastName='Reddy'> Hello Narasimha </Props>
      <Props name='Narasimha'> <button> Hello Narasimha </button> </Props> 
      {/* not only button , p , h or anything can be passed */}

      <ClassCompProps name='Narasimha'> Hello Narasimha </ClassCompProps>

      <CounterSetState addValue = " Narasimha " nextVal = ' Reddy '/>

      {/* <FunctionClick/> */}

      <ClassStateBinding/>

      <ParentComponent/>

      <NamesListIdorIndex/>
      <Inline primary={true}/>

      <Form/>
      {/* <UpdatingLifeCycle/> */}
      <ParentComponentPure/>

      <InputRefs/>
      <CallBackRefs/>
      <ForwRefParent/>

      <ReactPortals/>


      <ErrorBoundary>
        <ErrorHandlePhase heroName='Ram'/>
      </ErrorBoundary>

      <ErrorBoundary>
        <ErrorHandlePhase heroName='Raju'/>
        {/* <ErrorHandlePhase heroName = 'Joker'/>   */}

      {/*---- for this example see that our entire application crashes  --- in UI --- 
      x symbol will not display anything without using Error handling phase
      wrap all these in Error boundary ( without this nothing will b displayed ) Component  --- it is also not ideal --
      but wrap event element individually , so failing one will not effect the other */}
       </ErrorBoundary>

       <ClickCounterHoc name='HOC Props'/>
       <MouseOverHoc/>


        <UserRenderProps name={(isLoggedIn) => isLoggedIn? ' Render Props': ' Not a Render Props'} />
        {/* not only name --- we can use any -- render also ---
        Here , In react , we can prop whose value is a function , to control what need to be rendered*/}

        <CounterRenderProps render={(count, incrementCount) => <ClickCounterRenderProps count={count} incrementCount={incrementCount} />} />

        {/* <CounterRenderProps>
           {(count, incrementCount) => <ClickCounterRenderProps count={count} incrementCount={incrementCount} />} 
        </CounterRenderProps> */}

      <PaginationTable/>
      <ColumnHiding/>


      <BackgroundComp />


      <div>

        {
          todoData.map( each => {
            return (<TodoTest todo={each} /> )
          })
        }
      </div>
    </div>
  );
}

export default App;
