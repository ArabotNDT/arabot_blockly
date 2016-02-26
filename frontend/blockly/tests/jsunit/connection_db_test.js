/**
 * @license
 * Blockly Tests
 *
 * Copyright 2015 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

function verify_DB_(msg, expected, db) {
   var equal = (expected.length == db.length);
   if (equal) {
     for (var x = 0; x < expected.length; x++) {
       if (expected[x] != db[x]) {
         equal = false;
         break;
       }
     }
   }
   if (equal) {
     assertTrue(msg, true);
   } else {
     assertEquals(msg, expected, db);
   }
}

function test_DB_addConnection() {
  var db = new Blockly.ConnectionDB();
  var o2 = {y_: 2, sourceBlock_: {}};
  db.addConnection_(o2);
  verify_DB_('Adding connection #2', [o2], db);

  var o4 = {y_: 4, sourceBlock_: {}};
  db.addConnection_(o4);
  verify_DB_('Adding connection #4', [o2, o4], db);

  var o1 = {y_: 1, sourceBlock_: {}};
  db.addConnection_(o1);
  verify_DB_('Adding connection #1', [o1, o2, o4], db);

  var o3a = {y_: 3, sourceBlock_: {}};
  db.addConnection_(o3a);
  verify_DB_('Adding connection #3a', [o1, o2, o3a, o4], db);

  var o3b = {y_: 3, sourceBlock_: {}};
  db.addConnection_(o3b);
  verify_DB_('Adding connection #3b', [o1, o2, o3b, o3a, o4], db);
}

function test_DB_removeConnection() {
  var db = new Blockly.ConnectionDB();
  var o1 = {y_: 1, sourceBlock_: {}};
  var o2 = {y_: 2, sourceBlock_: {}};
  var o3a = {y_: 3, sourceBlock_: {}};
  var o3b = {y_: 3, sourceBlock_: {}};
  var o3c = {y_: 3, sourceBlock_: {}};
  var o4 = {y_: 4, sourceBlock_: {}};
  db.addConnection_(o1);
  db.addConnection_(o2);
  db.addConnection_(o3c);
  db.addConnection_(o3b);
  db.addConnection_(o3a);
  db.addConnection_(o4);
  verify_DB_('Adding connections 1-4', [o1, o2, o3a, o3b, o3c, o4], db);

  db.removeConnection_(o2);
  verify_DB_('Removing connection #2', [o1, o3a, o3b, o3c, o4], db);

  db.removeConnection_(o4);
  verify_DB_('Removing connection #4', [o1, o3a, o3b, o3c], db);

  db.removeConnection_(o1);
  verify_DB_('Removing connection #1', [o3a, o3b, o3c], db);

  db.removeConnection_(o3a);
  verify_DB_('Removing connection #3a', [o3b, o3c], db);

  db.removeConnection_(o3c);
  verify_DB_('Removing connection #3c', [o3b], db);

  db.removeConnection_(o3b);
  verify_DB_('Removing connection #3b', [], db);
}

function test_DB_getNeighbours() {
  var db = new Blockly.ConnectionDB();

  // Search an empty list.
  assertEquals(helper_getNeighbours(db, 10 /* x */, 10 /* y */, 100 /* radius */).length, 0);

  // Set up some connections.
  for (var i = 0; i < 10; i++) {
      db.addConnection_(helper_createConnection(0, i, Blockly.PREVIOUS_STATEMENT));
  }

  // Test block belongs at beginning
  var result = helper_getNeighbours(db, 0, 0, 4);
  assertEquals(5, result.length);
  for (i = 0; i < result.length; i++) {
      assertNotEquals(result.indexOf(db[i]), -1); // contains
  }

  // Test block belongs at middle
  result = helper_getNeighbours(db, 0, 4, 2);
  assertEquals(5, result.length);
  for (i = 0; i < result.length; i++) {
      assertNotEquals(result.indexOf(db[i + 2]), -1); // contains
  }

  // Test block belongs at end
  result = helper_getNeighbours(db, 0, 9, 4);
  assertEquals(5, result.length);
  for (i = 0; i < result.length; i++) {
      assertNotEquals(result.indexOf(db[i + 5]), -1); // contains
  }

  // Test block has no neighbours due to being out of range in the x direction
  result = helper_getNeighbours(db, 10, 9, 4);
  assertEquals(result.length, 0);

  // Test block has no neighbours due to being out of range in the y direction
  result = helper_getNeighbours(db, 0, 19, 4);
  assertEquals(result.length, 0);

  // Test block has no neighbours due to being out of range diagonally
  result = helper_getNeighbours(db, -2, -2, 2);
  assertEquals(result.length, 0);
}

function helper_getNeighbours(db, x, y, radius) {
  return db.getNeighbours(helper_createConnection(x, y, Blockly.NEXT_STATEMENT), radius);
}

function helper_createConnection(x, y, type) {
  var conn = new Blockly.Connection({workspace: {}}, type);
  conn.x_ = x;
  conn.y_ = y;
  return conn;
}