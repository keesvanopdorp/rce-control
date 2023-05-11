'use client';
import { Command } from '@libs/types/Config';
import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { ClickHandler } from '../../app/page';

export interface Props {
    command: Command;
    commandKey: string;
    clickHandler: ClickHandler;
}

const CommandButton: FunctionComponent<Props> = (props: Props): React.ReactElement => {
    const { command, commandKey, clickHandler } = props;
    const { 'background-color': backgroundColor, 'text-color': textColor, name } = command;

    return (
        <Button
            variant="outline-dark"
            className="px-5 py-2 w-100 my-2"
            onClick={async () => await clickHandler(commandKey)}
            style={{ backgroundColor, color: textColor }}>
            {name}
        </Button>
    );
};

export default CommandButton;
