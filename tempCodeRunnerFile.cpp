#include<bits/stdc++.h>
using namespace std;
class graph {

    public :
        unordered_map< int, list<int> > adj;

        void addEdge(int u, int v, bool direction) {
            // direction = 0 -> undirected;
            // direction = 1 -> directed;
            adj[u].push_back(v);
            if(direction==0) {
                adj[v].push_back(u);
            }

        }
        void print() {
            for(auto i: adj) {
                cout<<i.first<<"->";
                for(auto j: adj[i]) {
                    cout<<j<<" ";
                }
                cout<<endl;
            }
        }
}
int main() {
    int n, m;
    cout<<"Enter the number of nodes\n";
    cin>>n;
    cout<<"Enter the number of edges\n";
    cin>>m;
    graph g;
    for(int i=0;i<n;i++) {
        int u, v;
        for(int j=0;j<m;j++) {
            cin>>u>>v;
            g.addEdge(u,v,0);
        }
    }
    g.print();
    return 0;
}