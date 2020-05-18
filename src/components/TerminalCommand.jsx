import React from "react";
import TerminalArrow from "./TerminalArrow";
import TerminalText from "./TerminalText";
import brainfuck from "../brainfuck-interpreter.js";
import { calculateMath, isMath } from "../math-interpreter.js";

const TerminalCommand = ({ history, text, brainfuckMode }) => {
  switch (text.toLowerCase()) {
    case "":
      return <TerminalArrow />;
    case "help":
      return (
        <div>
          <TerminalArrow text={text} />
          <TerminalText>
            <b>help</b> - see all commands
          </TerminalText>
          <TerminalText>
            <b>about</b> - what is this
          </TerminalText>
          <TerminalText>
            <b>/</b> or <b>home</b> - go home
          </TerminalText>
          <TerminalText>
            <b>fun</b> - fun games or something maybe
          </TerminalText>
          <TerminalText>
            <b>brainfuck</b> - turn on/off brainfuck interpreter
          </TerminalText>
          <TerminalText>
            <b>clear</b> - clear terminal window
          </TerminalText>
        </div>
      );
    case "about":
      return (
        <div>
          <TerminalArrow text={text} />
          <TerminalText>This is a terminal.</TerminalText>
        </div>
      );
    case "brainfuck":
      return (
        <div>
          <TerminalArrow text={text} />
          <TerminalText>
            {brainfuckMode
              ? "Brainfuck interpreter initiated."
              : "Brainfuck interpreter disabled."}
          </TerminalText>
        </div>
      );
    default:
      if (brainfuckMode) {
        let brainfuckResult = brainfuck(text);
        if (brainfuckResult === "syntax-error") {
          return (
            <div>
              <TerminalArrow text={text} />
              <TerminalText>Brainfuck syntax error</TerminalText>
              <TerminalText>
                Turn off the interpreter by entering <b>brainfuck</b>
              </TerminalText>
            </div>
          );
        }
        return (
          <div>
            <TerminalArrow text={text} />
            <TerminalText>{brainfuckResult}</TerminalText>
          </div>
        );

        // Is this math?
      } else if (isMath(text)) {
        return (
          <div>
            <TerminalArrow text={text} />
            <TerminalText>{calculateMath(text)}</TerminalText>
          </div>
        );
      }
      return (
        <div>
          <TerminalArrow text={text} />
          <TerminalText>Unknown command.</TerminalText>
          <TerminalText>
            Enter <b>help</b> to see all available commands.
          </TerminalText>
        </div>
      );
  }
};

export default TerminalCommand;
