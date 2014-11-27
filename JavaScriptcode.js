            // global variable and arrays
			var curLoc = 0;
			var score = 0;	
			//var inventory = "";
			// global array for location instances
            var locArray = [];
			    locArray[0] = Loc0_smth,
				locArray[1] = Loc1_smth,
				locArray[2] = Loc2_smth,			
				locArray[3] = Loc3_smth,
				locArray[4] = Loc4_smth,
				locArray[5] = Loc5_smth,
				locArray[6] = Loc6_smth,
				locArray[7] = Loc7_smth,
				locArray[8] = Loc8_smth,
				locArray[9] = Loc9_smth,
				locArray[10] = Loc10_smth
				
			// global array for items and inventory
			var item = new Array();
			item[3] = itemMap;
			item[4] = itemFlashlight;
			item[6] = itemMusicSheet;
			
			var inventory = new Array();
				
		   // global array for navigation 
 			//var navigation = new Array(    /*N   S   E   W*/ 
			//                        /*0*/  [ 1,  3,  4,  2]  
			 //						  /*1*/  [-1,  0,  6, -1] 
			//						  /*2*/  [-1, -1,  0, -1] 
 			//						  /*3*/  [ 0, -1, -1, -1] 
 			//					      /*4*/  [ 5, -1, 10,  0] 
			//					      /*5*/  [ 6,  4,  8, -1] 
			//					      /*6*/  [-1,  5,  7,  1] 
			//				          /*7*/  [-1,  8, -1,  6] 
			//					      /*8*/  [ 7, 10,  9,  5] 
			//					      /*9*/  [-1, -1, -1,  8] 
			//					     /*10*/  [ 8, -1, -1,  4] 
		     //               )		 

	    
     		var hasVisitedRoom0 = false;
		    var hasVisitedRoom1 = false;
		    var hasVisitedRoom2 = false;
		    var hasVisitedRoom3 = false;
		    var hasVisitedRoom4 = false;
			var hasVisitedRoom5 = false;
			var hasVisitedRoom6 = false;
			var hasVisitedRoom7 = false;
			var hasVisitedRoom8 = false;
			var hasVisitedRoom9 = false;
			var hasVisitedRoom10 = false;
			
		   //initial function
		   function init() {
			    updateDisplay(Loc0_smth);
				buttonVisibility();			
			    document.getElementById("picture").style.visibility = "hidden";
				takeButtonVisibility();
				document.getElementById("mainText").readOnly = true;
				document.getElementById("scoreText").readOnly = true;
			}	
				
		   
			// Location prototype	
		    function locale() {
			 this.id = "";
		     this.name = "";
			 this.message = "";
			 this.toString = function() {
				     var text = "";
					 text = this.message + " " ;
					 return text;
				 }
			 this.hasItem = function() {
			      if (this.hasItem = true) {
				     return item[locArray].message;
					} else {
					  return "";
					  }
			 }
			}
		
			  //Inventory prototype
			function Item() {
			  this.id = "";
			  this.name = "";
			  this.message = "";
			  this.isTaken = "";
			}
			
			//Inventory instances
				var itemMap = new Item();
				itemMap.id = 3;
				itemMap.name = "Map";
				itemMap.message = "There is a map on the table.";
				itemMap.isTaken = false;

				var itemFlashlight = new Item();
				itemFlashlight.id = 4;
				itemFlashlight.name = "Wrench";
				itemFlashlight.message = "There is a flashlight.";
				itemFlashlight.isTaken = false;

				var itemMusicSheet = new Item();
				itemMusicSheet.id = 5;
				itemMusicSheet.name = "Key";
				itemMusicSheet.message = "There is a music sheet on the floor.";
				itemMusicSheet.isTaken = false;
				
				
			function btn_take() {
				if (curLoc === 3) {
				    Loc3_smth.hasItem = false;
				   // inventory = inventory + " map ";
					document.getElementById("picture").style.visibility = "visible";					
					message = "You have taken the map of the mansion.";
                    checkScore();
		            dspScore();	
                    document.getElementById("takeButton").disabled = true;					
				 } else {			 
			        if (curLoc === 4) {
					    Loc4_smth.hasItem = false;
				        //inventory = inventory  + " flashlight ";
					    message = "You have taken a flashlight.";	
                        checkScore();
		                dspScore();	
                        document.getElementById("takeButton").disabled = true;	
                      } else {
                          if (curLoc === 6) {
						      Loc6_smth.hasItem = false;
				              //inventory = inventory + " Music Sheet ";									
					          message = "You have taken Music Sheet.";
                              checkScore();							  
		                      dspScore();	
                              document.getElementById("takeButton").disabled = true;						 
			                } else {
					             message = "There is nothing to take in this room.";
						 } 
					 }
			    }
			  presentMessage(message);
			}
						
		
			// Location Instances
			var Loc0_smth = new locale();
			Loc0_smth.id = 0;
			Loc0_smth.name = "mansion's hall";
			Loc0_smth.message = "room 0";
			Loc0_smth.hasItem = false;
			
			
		    var Loc1_smth = new locale();
		    Loc1_smth.id = 1;
			Loc1_smth.name = "dark room";
			Loc1_smth.message = "room 1";
			Loc1_smth.hasItem = false;
			
		
			var Loc2_smth = new locale();
			Loc2_smth.id = 2;
			Loc2_smth.name = "living room";
			Loc2_smth.message = "room 2";
			Loc2_smth.hasItem = false;
			
			
			var Loc3_smth = new locale();
			Loc3_smth.id = 3;
			Loc3_smth.name = "piano room";
			Loc3_smth.message = "room 3";
			Loc3_smth.hasItem = true;
			
			var Loc4_smth = new locale();
			Loc4_smth.id = 4;
			Loc4_smth.name = "kitchen";
			Loc4_smth.message = "room 4";
			Loc4_smth.hasItem = true;
			
			var Loc5_smth = new locale();
			Loc5_smth.id = 5;
			Loc5_smth.name = "dining";
			Loc5_smth.message = "room 5";
			Loc5_smth.hasItem = false;
			
			var Loc6_smth = new locale();
			Loc6_smth.id = 6;
			Loc6_smth.name = "small corridor";
			Loc6_smth.message = "room 6";
			Loc6_smth.hasItem = true;
			
			var Loc7_smth = new locale();
			Loc7_smth.id = 7;
			Loc7_smth.name = "bedroom";
			Loc7_smth.message = "room 7";
			Loc7_smth.hasItem = false;
			
			var Loc8_smth = new locale();
			Loc8_smth.id = 8;
			Loc8_smth.name = "large hallway";
			Loc8_smth.message = "room 8";
			Loc8_smth.hasItem = false;
			
			var Loc9_smth = new locale();
			Loc9_smth.id = 9;
			Loc9_smth.name = "stairs";
			Loc9_smth.message = "room 9";
			Loc9_smth.hasItem = false;
			
			var Loc10_smth = new locale();
			Loc10_smth.id = 10;
			Loc10_smth.name = "library";
			Loc10_smth.message = "room 10";
			Loc10_smth.hasItem = false;
			
           //navigation functions
		    function btn_go_North() {
		    if (curLoc === 3) {
			    curLoc = 0;               
                updateDisplay(Loc0_smth);			
			   } else {
			       if (curLoc === 0) {
				       curLoc = 1;	
                       updateDisplay(Loc1_smth);					   
			        } else {
					    if (curLoc === 4) {
				            curLoc = 5;	
                             updateDisplay(Loc5_smth);
						 } else {
							  if (curLoc === 5) {
				                  curLoc = 6;	
                                  updateDisplay(Loc6_smth);
							    } else {
					                if (curLoc === 8) {
				                        curLoc = 7;	
                                        updateDisplay(Lo7_smth);
						              } else {
							               if (curLoc === 10) {
				                               curLoc = 8;	
                                               updateDisplay(Loc8_smth);
							                 } else {
					                             navigationError();
											}
										}
									}
					             }		
					        }
					  }
					buttonVisibility();
			     } 

		    function btn_go_South() {
			    if (curLoc === 1) {
			        curLoc = 0;	
                    updateDisplay(Loc0_smth);
			     } else {
			          if (curLoc === 0) {
				          curLoc = 3;
                          updateDisplay(Loc3_smth);				  
				     } else {
					     if (curLoc === 6) {
				             curLoc = 5;	
                             updateDisplay(Loc5_smth);
						 } else {
							  if (curLoc === 5) {
				                  curLoc = 4;	
                                  updateDisplay(Loc4_smth);
							    } else {
					                if (curLoc === 7) {
				                        curLoc = 8;	
                                        updateDisplay(Loc8_smth);
						              } else {
							               if (curLoc === 8) {
				                               curLoc = 10;	
                                               updateDisplay(Loc10_smth);
							                  } else {
					                             navigationError();
											}
										}
									}
					             }		
					        }
					    }	
                     buttonVisibility();						
		           }
		    
		    function btn_go_West() {
		      if (curLoc === 4) {
                  curLoc = 0;  
                  updateDisplay(Loc0_smth);		  
			      } else {
			           if (curLoc === 0) {
				           curLoc = 2;	
                           updateDisplay(Loc2_smth);					   
				        } else {
						    if (curLoc === 7) {
				                curLoc = 6;	
                                updateDisplay(Loc6_smth);
						    } else {
							    if (curLoc === 6) {
				                    curLoc = 1;	
                                    updateDisplay(Loc1_smth);
							     } else {
							          if (curLoc === 8) {
				                          curLoc = 5;	
                                          updateDisplay(Loc5_smth);
							           } else {
					                        if (curLoc === 10) {
				                                curLoc = 4;	
                                                updateDisplay(Loc4_smth);
						                     } else {
							                      if (curLoc === 9) {
				                                      curLoc = 8;	
                                                      updateDisplay(Loc8_smth);
							                       } else {
					                                     navigationError();
													}
												}
										    }
									  }
								 }
						   }
					            		
				    }
                  buttonVisibility();					
		      }			 
			         
		    function btn_go_East(){
		     if (curLoc === 2) {
			     curLoc = 0;
                 updateDisplay(Loc0_smth);				 
			     } else {
			          if (curLoc === 0) {
			              curLoc = 4;
                          updateDisplay(Loc4_smth);		          
			            } else {
						      if (curLoc === 1) {
				                  curLoc = 6;	
                                  updateDisplay(Loc6_smth);
							  } else {
							       if (curLoc === 6) {
				                       curLoc = 7;	
                                       updateDisplay(Loc7_smth);
									} else {
							            if (curLoc === 5) {
				                            curLoc = 8;	
                                            updateDisplay(Loc8_smth);
									    } else {
							                if (curLoc === 4) {
				                                curLoc = 10;	
                                                updateDisplay(Loc10_smth);
									         } else {
							                     if (curLoc === 8) {
				                                     curLoc = 9;	
                                                     updateDisplay(Loc9_smth);
									              } else {
					                                  navigationError();
												}
											}
										}
								   }
					          }					  
					     }
		            }
                  buttonVisibility();					
		        }

            function txtCommand_keypress(e) {
				 if (e.which === 13) {
				     document.getElementById("go").onclick();
					 }
			}
		
		  
			function btnGo_click() {             			
               txtCommand.value = txtCommand.value.toLowerCase();				  
			    if (txtCommand.value === "north" || txtCommand.value === "n") {				
			       btn_go_North();					
			       } else {
			           if (txtCommand.value === "south" || txtCommand.value === "s") {
				           btn_go_South();
				         } else {
					         if (txtCommand.value === "east" || txtCommand.value === "e") {
						         btn_go_East();
					           } else {
						           if (txtCommand.value === "west" || txtCommand.value === "w") {
							           btn_go_West();
							         } else {
							             if (txtCommand.value === "take" || txtCommand.value === "t") {
							                 btn_take();
							             } else {
							                 unknownCommand();
											}
										}
						             }
					            }
			               }
		            }
		  
		    function updateDisplay(msg) {
			         var msg = msg;
					 var userCommand = document.getElementById("mainText");
					 userCommand.value = msg + "\n\n" + userCommand.value;
			         checkScore();
		             dspScore();
			}
		  		 
		  		  		  
		    function navigationError() {		          
			  presentMessage("You cannot go that way.");		     		 		        
		   }
		   
		    function unknownCommand() {
		      presentMessage("I don't understand your command.");
		   }
	   		
	    
		/*	function btn_take() {
				if (curLoc === 3 && inventory.indexOf("map") < 0) {
				    inventory = inventory + " map ";
					document.getElementById("picture").style.visibility = "visible";					
					message = "You have taken the map of the mansion.";
                    checkScore();
		            dspScore();	
                    document.getElementById("takeButton").disabled = true;					
				 } else {			 
			        if (curLoc === 4 && inventory.indexOf("flashlight") < 0) {
				        inventory = inventory  + " flashlight ";
					    message = "You have taken a flashlight.";	
                        checkScore();
		                dspScore();	
                        document.getElementById("takeButton").disabled = true;	
                      } else {
                          if (curLoc === 6 && inventory.indexOf("Music") < 0) {
				              inventory = inventory + " Music Sheet ";									
					          message = "You have taken Music Sheet.";
                              checkScore();							  
		                      dspScore();	
                              document.getElementById("takeButton").disabled = true;						 
			                } else {
					             message = "There is nothing to take in this room.";
						 } 
					 }
			    }
			  presentMessage(message);
			}
				*/  		
	       /*
		   function items() {
		     var item1 = new map();
			 var item2 = new flashlight();
		   }
		   
		   function map() {
		     this.contents = "map";
		   } 
		   
		    function flashlight() {
		      this.contents = "flashlight";
			  
			}
		   */
		   
		    function showInventory() {	      
			   message = "Your inventory includes:" + " " + inventory;
			   presentMessage(message);			  
		   }

		   function btn_Help() {
		        message = "Navigate with buttons north, south, east, or west." + 
				          " Collect items available with by pressing Take button" + 
						  " or typing take into the command text area. Check your" + 
						  " inventory by pressing My Inventory button. Score is" + 
						  " reflected on the right. To see the map, you have to find it";
				presentMessage(message);
		   }
		   
		  //utility functions
		   function presentMessage(message) {
			   var target = document.getElementById("mainText");
               target.value = message + "\n\n" + target.value;
            }	
			
			function takeButtonVisibility() {
			    if (curLoc === 3) {
				     if (inventory.indexOf("map") < 0) {
				         document.getElementById("takeButton").disabled = false;
				    } else {
				         document.getElementById("takeButton").disabled = true;
				    }
				
				} else {
					if (curLoc === 4) {
					   if (inventory.indexOf("flashlight") < 0){				        
						   document.getElementById("takeButton").disabled = false;
						} else {
				             document.getElementById("takeButton").disabled = true;
				        }
					    
				} else { 
                     if (curLoc === 6) {
					     if (inventory.indexOf("Mus") < 0){				        
						     document.getElementById("takeButton").disabled = false;
					      } else { 
                              document.getElementById("takeButton").disabled = true;
                            }									                                							  
				} else {
				      document.getElementById("takeButton").disabled = true;
					 }
				   }
                }
            }			
				   

		   function buttonVisibility() {
		     switch(curLoc) {
			    case 0: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false;
				        document.getElementById("takeButton").disabled = true;
                        break;						
				case 1: document.getElementById("northBtn").disabled = true;
				        document.getElementById("westBtn").disabled = true;
                        document.getElementById("takeButton").disabled = true;						
						break;
				case 2: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = true;
			            document.getElementById("westBtn").disabled = true;
						document.getElementById("eastBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 3: document.getElementById("southBtn").disabled = true;
			            document.getElementById("westBtn").disabled = true;
			            document.getElementById("eastBtn").disabled = true;
						document.getElementById("northBtn").disabled = false;
						takeButtonVisibility();
						break;
				case 4: document.getElementById("southBtn").disabled = true;
				        document.getElementById("eastBtn").disabled = false;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("northBtn").disabled = false;
						takeButtonVisibility();
						break;
				case 5: document.getElementById("westBtn").disabled = true;
			            document.getElementById("eastBtn").disabled = false;
						document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 6: document.getElementById("northBtn").disabled = true;
				        document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false;
                        takeButtonVisibility();						
				        break;
				case 7: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 8: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
						document.getElementById("eastBtn").disabled = false;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
				case 9: document.getElementById("northBtn").disabled = true;
			            document.getElementById("southBtn").disabled = true;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
			   case 10: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = true;
						document.getElementById("eastBtn").disabled = true;
						document.getElementById("westBtn").disabled = false;
						document.getElementById("takeButton").disabled = true;
						break;
			   default: document.getElementById("northBtn").disabled = false;
			            document.getElementById("southBtn").disabled = false;
			            document.getElementById("westBtn").disabled = false;
			            document.getElementById("eastBtn").disabled = false; 
						document.getElementById("takeButton").disabled = true;
		     }
		   }
			
		  // functions for keeping and showing score!
		   function checkScore() {
		     if (curLoc === 0) {
		         if (! hasVisitedRoom0) {	        
			         score = score + 5;
				     hasVisitedRoom0 = true;
				 }
		     }
		     
		    if (curLoc === 1) {			
			      if (! hasVisitedRoom1) {			  
			          score = score + 5;
				      hasVisitedRoom1 = true;
				  }
			 }
				 							 		
			if (curLoc === 2) {
			     if (! hasVisitedRoom2) {
			         score = score + 5;
				     hasVisitedRoom2 = true;
				  }
			 }
				   			   
			if (curLoc === 3) {
				  if (! hasVisitedRoom3) {
			          score = score + 5;
				      hasVisitedRoom3 = true;
			       }
			 }
				 
			if (curLoc === 4) {
			    if (! hasVisitedRoom4) {
			        score = score + 5;
				    hasVisitedRoom4 = true;				 
			     }
			 }
				 
			if (curLoc === 5) {
			    if (! hasVisitedRoom5) {
			        score = score + 5;
				    hasVisitedRoom5 = true;				 
			     }
			 }
				 
			if (curLoc === 6) {
			    if (! hasVisitedRoom6) {
			        score = score + 5;
				    hasVisitedRoom6 = true;				 
			     }
			 }
				 
			if (curLoc === 7) {
			    if (! hasVisitedRoom7) {
			        score = score + 5;
				    hasVisitedRoom7 = true;				 
			     }				 
			 }
			 
			 if (curLoc === 8) {
			    if (! hasVisitedRoom8) {
			        score = score + 5;
				    hasVisitedRoom8 = true;				 
			     }
			 }
			 
			 if (curLoc === 9) {
			    if (! hasVisitedRoom9) {
			        score = score + 5;
				    hasVisitedRoom9 = true;				 
			     }
			 }
			 
			 if (curLoc === 10) {
			    if (! hasVisitedRoom10) {
			        score = score + 5;
				    hasVisitedRoom10 = true;				 
			     }
			 }
	 
			 if (curLoc === 3 && inventory.indexOf("map") >= 0) {
			     score = score + 5;
			 }
			 
			 if (curLoc === 4 && inventory.indexOf("flashlight") >= 0) {
			     score = score + 5;
				}
			
			if (curLoc === 6 && inventory.indexOf("Music") >= 0) {
			     score = score + 5;
				}
			 
		 }     			
		  function dspScore() {			         
			     document.getElementById("scoreText").value = "Score:" + score;
		 }
