                  import React from 'react';
                  import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
                  import { Avatar, Text } from 'react-native-elements';
                  import { View } from 'react-native';
                  import DropDownPicker from 'react-native-dropdown-picker';

                  const CustomDrawer = ({ navigation, ...props }) => {
                    const dropdownItems = [
                      { label: "Profile", value: "Profile" },
                      { label: "Logout", value: "Logout" },
                      { label: "Change Password", value: "ChangePassword" },
                    ];
                    return (
                      <View style={{ flex: 1, backgroundColor: '#b3e0f2' }}>
                   <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                          <Avatar
                            rounded
                            size="large"
                            icon={{ name: 'user', type: 'font-awesome' }}
                            containerStyle={{
                              backgroundColor: 'green',
                              borderWidth: 2,
                              borderColor: 'white',
                              shadowColor: 'black',
                              shadowOffset: { width: 0, height: 2 },
                              marginBottom: 10,
                              
                            }}
                                         
                          />
                          <Text style={{ fontSize: 18, color: 'white' }}>Minnu A</Text>

                        </View>     
                        <DropDownPicker
                  items={dropdownItems}
                  containerStyle={{ height: 40 }}
                  style={{ backgroundColor: "#fafafa" }}
                  itemStyle={{
                    justifyContent: "flex-start",
                  }}
                  dropDownStyle={{ backgroundColor: "#fafafa" }}
                  onChangeItem={(item) => {
         
                    console.log(item);
                   
                    if (item.value === "Profile") {
                      
                      navigation.navigate("ProfileScreen");
                    } else if (item.value === "Logout") {
                     
                    } else if (item.value === "ChangePassword") {
                  
                      navigation.navigate("ChangePasswordScreen");
                    }
                  }}
                />
                        <DrawerContentScrollView {...props}>
                          <DrawerItemList {...props} />
                        </DrawerContentScrollView>
                        
                      </View>
                    );
                  };

                  export default CustomDrawer;
