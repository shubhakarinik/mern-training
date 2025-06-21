 <type="text/babel">
    function Book() {
      
      return (
        <div>
          <h1>Harry Potter</h1>
          <p>Author: J.K. Rowling</p>
          <p>Publisher: Bloomsbury Publishing</p>
          <button>Greet</button>
        </div>
      );
    }

    // Render to the DOM
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Book />);
  