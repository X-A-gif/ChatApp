'use client'
import ChatComponent from './components/Chat';

function ParentComponent() {
  return (
    <div>
      {/* This component should render on the client */}
      <ChatComponent />
    </div>
  );
}

export default ParentComponent;
