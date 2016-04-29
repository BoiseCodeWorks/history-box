(function(){

    angular.module('history-box', [])
        .controller('HistoryController', HistoryController)
        .service('HistoryService', HistoryService)

        function HistoryController($scope, HistoryService){
            var hc = this;
            hc.history = []
            hc.currentIndex = 0;
            
            hc.traverseCommands = function(e){
                var keyPressed = e.keyCode;
                var maxIndex = hc.history.length - 1;
                var minIndex = 0;

                //KeyCode 38 === up arrow
                if(keyPressed == 38){
                    hc.currentIndex++;
                    hc.command = hc.history[hc.currentIndex]
                } else if(keyPressed == 40){
                    hc.currentIndex--;
                    hc.command = hc.history[hc.currentIndex]
                }
                
                
            }
            
            hc.saveToHistory = function(whateverwastypedintotheinputbox){
                hc.history.push(whateverwastypedintotheinputbox);
                hc.command = ''; //clears the last known command from the input box
            }
        }

        function HistoryService(){
            
        }
}())