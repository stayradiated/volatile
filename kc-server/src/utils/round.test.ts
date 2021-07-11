import test from 'ava'

import { round } from './round.js'

test('round: 0dp', (t) => {
  t.is(round(0, 1.123_456_789), 1)
  t.is(round(0, 0.987_654_321), 1)
})

test('round: 1dp', (t) => {
  t.is(round(1, 1.123_456_789), 1.1)
  t.is(round(1, 0.987_654_321), 1)
})

test('round: 2dp', (t) => {
  t.is(round(2, 1.123_456_789), 1.12)
  t.is(round(2, 0.987_654_321), 0.99)
})

test('round: 3dp', (t) => {
  t.is(round(3, 1.123_456_789), 1.123)
  t.is(round(3, 0.987_654_321), 0.988)
})

test('round: 4dp', (t) => {
  t.is(round(4, 1.123_456_789), 1.1235)
  t.is(round(4, 0.987_654_321), 0.9877)
})

test('round: 5dp', (t) => {
  t.is(round(5, 1.123_456_789), 1.123_46)
  t.is(round(5, 0.987_654_321), 0.987_65)
})

test('round: 6dp', (t) => {
  t.is(round(6, 1.123_456_789), 1.123_457)
  t.is(round(6, 0.987_654_321), 0.987_654)
})

test('round: 7dp', (t) => {
  t.is(round(7, 1.123_456_789), 1.123_456_8)
  t.is(round(7, 0.987_654_321), 0.987_654_3)
})

test('round: 8dp', (t) => {
  t.is(round(8, 1.123_456_789), 1.123_456_79)
  t.is(round(8, 0.987_654_321), 0.987_654_32)
})

test('round: 9dp', (t) => {
  t.is(round(9, 1.123_456_789), 1.123_456_789)
  t.is(round(9, 0.987_654_321), 0.987_654_321)
})

test('round: 10dp', (t) => {
  t.is(round(10, 1.123_456_789), 1.123_456_789)
  t.is(round(10, 0.987_654_321), 0.987_654_321)
})
