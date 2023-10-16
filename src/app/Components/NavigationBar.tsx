import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

export default function NavigationBar(){
    return( 
        <div>
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent:"space-between" }}>
                <Link href={"/"}>
                <h1>Logo</h1>
                </Link>
                <div style={{display:"flex", gap:10}}>
                <Link href={"/Pages/LoginPage"}>
                    <Button>se connecter</Button>
                </Link>
                <Link href={"/Pages/RegisterPage"}>
                    <Button>s'inscrire</Button>
                </Link>
                </div>
                
                
                
            </Header>
        </div>
    )

}