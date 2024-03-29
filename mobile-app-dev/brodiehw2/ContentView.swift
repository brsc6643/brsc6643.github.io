//
//  ContentView.swift
//  hw1
//
//  Created by ATLAS Laptop 2 on 9/5/23.
//

import SwiftUI

struct ContentView: View {
    
    @State var switched: Bool = false
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .resizable()
                .frame(width: 50, height: 50)
                .foregroundColor(.accentColor)
            Text("Welcome to Swift.")
                .font(.system(size: 36))
            Image(systemName: "swift")
                .imageScale(.large)
                .foregroundColor(.accentColor)
                .padding()
            HStack {
                Image(systemName: "person")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Image(systemName: "person")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Image(systemName: "person")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Image(systemName: "person")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Image(systemName: "person")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
            }
            .padding()
            .padding()
            Circle()
                .fill(Color.accentColor)
                .frame(width: 150, height: 150)
                .overlay(
                    Text("Let's get started!")
                        .font(.title)
                        .multilineTextAlignment(.center) .foregroundColor(.white))
                .padding()
            Text("Tap the switch below.")
                .padding()
            Toggle("", isOn: $switched)
                .foregroundColor(Color.accentColor)
                .toggleStyle(SwitchToggleStyle(tint: .accentColor))
                .frame(width: 60, height: 30, alignment: .center)
            if switched{
                Text("Your journey begins. ")
                    .foregroundColor(Color.accentColor)
            }
        }
    }
    
    
    struct ContentView_Previews: PreviewProvider {
        static var previews: some View {
            ContentView()
        }
    }
    
}












//
//import SwiftUI
//
//struct ContentView: View {
//
//    @State var switched: Bool = false
//    @State var switchedtwo: Bool = false
//
//    var body: some View {
//        ZStack {
//
//            LinearGradient(colors: [.pink, .purple], startPoint: .topLeading, endPoint: .bottom)
//
//            VStack{
//                Spacer()
//                    .frame(height: 50.0)
//                Rectangle()
//                    .frame(height: 5.0)
//
//                Image("IMG_1800")
//                    .resizable()
//                                        .aspectRatio(contentMode: .fill)
//                                        .frame(width: 200, height: 200, alignment: .top)
//                                        .clipShape(Circle())
//
//                Text("Emma")
//                    .font(.title)
//                    .fontWeight(.bold)
//                    .foregroundColor(Color.white)
//                    .multilineTextAlignment(.center)
//
//                Rectangle()
//                    .frame(height: 5.0)
//
//                HStack{
//
//                        VStack{
//                            //I tried to get the text above the toggle so that it fit but I wasn't able to figure
//                            Toggle("Flip the Switch:", isOn: $switched)
//                                .foregroundColor(Color.white)
//                                .toggleStyle(SwitchToggleStyle(tint: .pink))
//                            if switched{
//                                Text("Button Switched")
//                                    .foregroundColor(Color.indigo)
//                            }
//                        }
//
//                        VStack{
//                            Toggle("Flip the Switch:", isOn: $switchedtwo)
//                                .foregroundColor(Color.white)
//                                .toggleStyle(SwitchToggleStyle(tint: .pink))
//                            if switchedtwo{
//                                Image("Boo")
//                                    .resizable()
//                                    .aspectRatio(contentMode: .fit)
//                                    .clipShape(Circle())
//                            }
//                        }
//                }
//            }
//
//
//        }
//        //.background(switched ? Color.orange : Color.purple)
//        .edgesIgnoringSafeArea(.all)
//    }
//}
//
//struct ContentView_Previews: PreviewProvider {
//    static var previews: some View {
//        ContentView()
//    }
//}
