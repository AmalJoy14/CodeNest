import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArrayString from './array-string'; 
import TwoPointers from './two-pointers';
import Hashmap from './hashmap';
import SlidingWindow from './sliding-window';
import BinarySearch from './binary-search';
import LinkedList from './linked-list';
import Trees from './trees';
import Heap from './heap';
import Backtracking from './backtracking';
import Trie from './trie';
import Graphs from './graphs';
import OneDDynamicProgramming from './dynamic-programming1';
import TwoDDynamicProgramming from './dynamic-programming2';
import Greedy from './greedy';
import Intervals from './intervals';
import MathAndGeometry from './math-geometry';
import BitManipulation from './bit-manipulation';

const Topics = () => {
  return (
    <Routes>
      <Route path="array-string" element={<ArrayString />} />
      <Route path="two-pointers" element={<TwoPointers />} />
      <Route path="hashmap" element={<Hashmap />} />
      <Route path="sliding-window" element={<SlidingWindow />} />
      <Route path="binary-search" element={<BinarySearch />} />
      <Route path="linked-list" element={<LinkedList />} />
      <Route path="trees" element={<Trees />} />
      <Route path="heap" element={<Heap />} />
      <Route path="backtracking" element={<Backtracking />} />
      <Route path="trie" element={<Trie />} />
      <Route path="graphs" element={<Graphs />} />
      <Route path="dynamic-programming1" element={<OneDDynamicProgramming />} />
      <Route path="dynamic-programming2" element={<TwoDDynamicProgramming />} />
      <Route path="greedy" element={<Greedy />} />
      <Route path="intervals" element={<Intervals />} />
      <Route path="math-geometry" element={<MathAndGeometry />} />
      <Route path="bit-manipulation" element={<BitManipulation />} />
    </Routes>
  );
};

export default Topics;
