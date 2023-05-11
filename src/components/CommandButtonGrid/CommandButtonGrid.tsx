'use client';
import { CommandButton } from '@components';
import { Commands } from '@libs/types/Config';
import React, { FunctionComponent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ClickHandler } from '../../app/page';

export interface Props {
    commands: Commands;
    clickHandler: ClickHandler;
}

const CommandButtonGrid: FunctionComponent<Props> = (props: Props): React.ReactElement => {
    const { commands, clickHandler } = props;

    return (
        <>
            <Row>
                {Object.keys(commands).map((key: string, index: number) => {
                    return (
                        <Col key={index} xs={{ span: 6 }} md={{ span: 2 }}>
                            <CommandButton clickHandler={clickHandler} commandKey={key} command={commands[key]} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default CommandButtonGrid;
