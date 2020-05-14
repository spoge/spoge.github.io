import React from "react";

const TerminalCommand = ({ history, text }) => {
  switch (text.toLowerCase()) {
    case "":
      return <div>></div>;
    case "help":
      return (
        <div>
          > {text}
          <br></br>
          <br></br>
          <b>help</b> - see all commands
          <br></br>
          <b>about</b> - what is this
          <br></br>
          <b>/</b> or <b>home</b> - go home
          <br></br>
          <b>fun</b> - fun games or something maybe
          <br></br>
          <b>clear</b> - clear terminal window
        </div>
      );
    case "/":
    case "home":
      history.push("/");
      return <div>> {text}</div>;
    case "fun":
      history.push("/fun");
      return <div>> {text}</div>;
    case "about":
      return (
        <div>
          > {text}
          <br></br>
          <br></br>This is a terminal.
        </div>
      );
    default:
      return (
        <div>
          > {text}
          <br></br>
          <br></br>Unknown command.<br></br>
          Enter <b>help</b> to see all available commands.
        </div>
      );
  }
};

export default TerminalCommand;
