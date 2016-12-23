import React from 'react';
const io = require('socket.io-client');
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import Board from '../components/Board.js';
import Grid from '../components/Grid.js';

describe("Board component test", () => {
  const socket = io.connect('http://localhost:3001');
  it("contains 361 Grids", () => {
    expect(mount(<Board />).find('.grid').length).to.equal(225);
  });
})
