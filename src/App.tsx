import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import './App.css';

function App() {
  let items=[
  {
      text: 'Paste',
      iconCss: 'e-btn-icons e-paste'
  },
  {
      text: 'Paste special',
      iconCss: 'e-btn-icons e-paste-special',
      disabled: true
  },
  {
      text: 'Paste as Formula',
      iconCss: 'e-btn-icons e-paste-formula'
  },
  {
      text: 'Paste as Hyperlink',
      iconCss: 'e-btn-icons e-paste-hyperlink'
  }
  ];
  return (
    <div className="App">
      <SplitButtonComponent content='Paste' items={items} iconCss='e-btn-icons e-paste'
      iconPosition='Top' cssClass='custom-popup-items li' disabled={true}>

      </SplitButtonComponent>
    </div>
  );
}

export default App;
