//
//  ContentView.swift
//  TestSampleClass
//
//  Created by ATLAS Laptop 2 on 9/6/23.
//

import SwiftUI

struct ContentView: View {
    
    @State var count: Int = 0
    @State var name: String = ""
    @State var lastName: String = ""
    
    @State var isOn: Bool = false
    
    var body: some View {
        VStack {
            Text("count \(count)")
            ButtonView(count: $count)
            }
        .padding()
        
        VStack {
            TextField("Name", text: $name)
            TextField("LastName", text: $lastName)
        }
        VStack {
            Text("Name is \(name)")
            Text("Last Name is \(lastName)")
        }
        }
    }

struct ButtonView: View {
    
    @Binding var count: Int
    
    init(count: Binding<Int>) {
        _count = count
    }
    
    var body: some View {
        Button("something") {
             count += 1
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
