	"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {
	//FB interaction - editBoard addBoard addPin editPin getPin removePin removeBoard getBoard getAllPins

const editBoard = (newBoardName) => {
    return $q((resolve, reject) => {
      let newName = JSON.stringify(newBoardName);
      $http.patch(`${FBCreds.databaseURL}/boards/${boardId}.json`, newName)
      .then((itemObject) => {
        resolve(itemObject);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


const addBoard = (newBoard) => {
    return $q((resolve, reject) => {
      let newObject = JSON.stringify(newBoard);
      $http.post(`${FBCreds.databaseURL}/boards.json`, newObject)
      .then ((itemID) => {
        resolve(itemID);
      })
      .catch((error) => {
        reject(error);
      });
    }); 
  };


const addPin = (newPin) => {
    return $q((resolve, reject) => {
      let newobject = JSON.stringify(newPin);
      $http.post(`${FBCreds.databaseURL}/pins.json`, newobject)
      /// item ID?
      .then ((itemID) => {
        resolve(itemID);
      })
      .catch((error) => {
        reject(error);
      });
    }); 
  };


const editPin = (pinId, editedpin) => {
    return $q((resolve, reject) => {
      let newObj = JSON.stringify(editedPin);
      $http.patch(`${FBCreds.databaseURL}/pins/${pinId}.json`, newObj)
      .then((itemObject) => {
        resolve(itemObject);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


const getPin = (pinId) => {
    return $q(function(resolve, reject){
      $http.get(`${FBCreds.databaseURL}/pins/${taskId}.json`)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      
      });
    });
  };


const removePin = (pinID) => {
    return $q((resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/pins/${pinID}.json`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


const removeBoard = (boardID) => {
    return $q((resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/boards/${boardID}.json`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };


const getBoard = (boardId) => {
    return $q(function(resolve, reject){
      $http.get(`${FBCreds.databaseURL}/boards/${boardId}.json`)
      .then(function(itemObject){
        resolve(itemObject.data);
      })
      .catch(function(error){
        reject(error);
      
      });
    });
  };


const getAllPins = () => {
    let pins = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/pins.json`)
    .then((itemObject) => {
      let itemCollection = itemObject.data;
      console.log("itemCollection", itemCollection);
      Object.keys(itemCollection).forEach((key) => {
      	/////  ????
        itemCollection[key].pinid = key;
        tasks.push(itemCollection[key].pinId);
     }); 
     resolve(pins);
    }).catch((error) => {
      reject(error);
    });
  });
}; 

const getAllBoards = () => {
    let boards = [];
    return $q((resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/boards.json`)
    .then((itemObject) => {
      let itemCollection = itemObject.data;
      console.log("itemCollection", itemCollection);
      Object.keys(itemCollection).forEach((key) => {
      	/////?????
        itemCollection[key].boardId = key;
        tasks.push(itemCollection[key]boardId);
     }); 
     resolve(pins);
    }).catch((error) => {
      reject(error);
    });
  });
}; 

const getUserBoards = (userId) => {

}

const getUserPins = (userId) => {

}

const getBoardPins = (boardId) => {

}


 return {
    addPin,
    getPin,
    getUserPins,
    getAllPins,
    getBoardPins,
    editPin,
    removePin,
    addBoard,
    getBoard,
    editBoard,
    getUserBoards,
    getAllBoards,
    removeBoard
  };

});