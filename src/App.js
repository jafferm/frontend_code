import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Clear from "./pages/Clear";
import Gradient from "./pages/gradient";
import Test from "./pages/test";
import Function from "./pages/function";
import Sqrt from "./pages/sqrt";
import Expand from "./pages/expand";
import Concat from "./pages/concat";
import Set from "./pages/set";
import Set_session from "./pages/set_session";
import Layer_concat from "./pages/layer_cocat";
import Layer_concatfunc from "./pages/layer_concatfunc";
import Layer_activ from "./pages/layer_activ";
import Layer_batch from "./pages/layer_batch";
import Layer_dense from "./pages/layer_dense";
import Layer_add from "./pages/layer_add";
import Layer_addfunc from "./pages/layer_addfunc";
import Layer_drop from "./pages/layer_drop";
import Layer_time from "./pages/layer_time";
import Layer_lstm from "./pages/layer_lstm";
import Layer_convo2d from "./pages/layer_convo2d";
import Layer_conv1d from "./pages/layer_conv1d";
import Layer_cudnn from "./pages/layer_cudnn";
import Layer_embed from "./pages/layer_embed";
import Layer_flatten from "./pages/layer_flatten";
import Layer_repvec from "./pages/layer_repvec";
import Layer_simpleRNN from "./pages/layer_simpleRNN";
import Layer_conv3d from "./pages/layer_conv3d";
import Layer_maxpool from "./pages/layer_maxpool";
import App_vg16 from "./pages/app_vg16";
import Model_fit from "./pages/model_fit";
import Model_model from "./pages/model_model";
import Model_loadweight from "./pages/model_loadweight";
import Model_predict from "./pages/model_predict";
import Model_saveweight from "./pages/model_saveweight";
import Model_save from "./pages/model_save";
import Model_compile from "./pages/model_compile";
import Model_getweight from "./pages/model_getweight";
import Model_layers from "./pages/model_layers";
import Model_evaluate from './pages/model_evaluate';
import Training from './pages/training';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clear" element={<Clear/>}/>
        <Route path="/gradient" element={<Gradient/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/function" element={<Function/>}/> 
        <Route path="/sqrt" element={<Sqrt/>}/>  
        <Route path="/expand" element={<Expand/>}/>                               
        <Route path="/concat" element={<Concat/>}/> 
        <Route path="/set" element={<Set/>}/>
        <Route path="/set_session" element={<Set_session/>}/>                                                      
        <Route path="/layer_cocat" element={<Layer_concat/>}/>                                                      
        <Route path="/layer_cocatfunc" element={<Layer_concatfunc/>}/>                                                      
        <Route path="/layer_activ" element={<Layer_activ/>}/> 
        <Route path="/layer_batch" element={<Layer_batch/>}/> 
        <Route path="/layer_dense" element={<Layer_dense/>}/> 
        <Route path="/layer_add" element={<Layer_add/>}/> 
        <Route path="/layer_addfunc" element={<Layer_addfunc/>}/> 
        <Route path="/layer_drop" element={<Layer_drop/>}/>                              
        <Route path="/layer_time" element={<Layer_time/>}/>
        <Route path="/layer_lstm" element={<Layer_lstm/>}/>                              
        <Route path="/layer_convo2d" element={<Layer_convo2d/>}/>                              
        <Route path="/layer_conv1d" element={<Layer_conv1d/>}/>                              
        <Route path="/layer_cudnn" element={<Layer_cudnn/>}/>                              
        <Route path="/layer_embed" element={<Layer_embed/>}/>                              
        <Route path="/layer_flatten" element={<Layer_flatten/>}/>
        <Route path="/layer_repvec" element={<Layer_repvec/>}/>                              
        <Route path="/layer_simpleRNN" element={<Layer_simpleRNN/>}/>
        <Route path="/layer_conv3d" element={<Layer_conv3d/>}/>
        <Route path="/layer_maxpool" element={<Layer_maxpool/>}/>
        <Route path="/app_vg16" element={<App_vg16/>}/>                                                            
        <Route path="/model_fit" element={<Model_fit/>}/>                                                            
        <Route path="/model_model" element={<Model_model/>}/> 
        <Route path="/model_loadweight" element={<Model_loadweight/>}/>                                                                      
        <Route path="/model_predict" element={<Model_predict/>}/> 
        <Route path="/model_saveweight" element={<Model_saveweight/>}/>
        <Route path="/model_save" element={<Model_save/>}/>
        <Route path="/model_compile" element={<Model_compile/>}/>
        <Route path="/model_getweight" element={<Model_getweight/>}/>
        <Route path="/model_layers" element={<Model_layers/>}/> 
        <Route path="/model_predict" element={<Model_predict/>}/> 
        <Route path="/model_evaluate" element={<Model_evaluate/>}/>
        <Route path="/training" element={<Training/>}/>                                                                       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
