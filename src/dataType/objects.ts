//Array
const arr: number[] = [1,2,3]
const arr2: number[][] = [[1,2,3],[4,5,6]]
//Any
let str3: any = 10
str3 = "hello"
str3 = [1,2,3]

//Tuples

const tuples: [string, string, number] = ["vo", "hd", 20];

//enum
enum STATUS {PENDING, REJECTED, FULFIL}

const trangThai1 : STATUS = STATUS.PENDING
console.log (trangThai);

enum CODE {SUCCESS = 200, CLIENT_ERROR = 400, SERVER_ERROR}


const sinhvieN : {name: string, age: number, homeTown?: string} = {
    name:"Nam cuong",
    age :20,
    // homeTown: "
}

const sinhvien2 : {name: string, age: number} = {
    name:"Nam ",
    age :20
}

interface Book {
    authors: Author[],
    book_cover?: string,
    category: {id: number, name: string, is_leaf: boolean},
    currency_seller: Seller
}
// Interface
interface Author {
    id: number,
    name: string,
    slug: string
}

// Type aliases
type Seller = {
    id: number,
    sku: string,
    name: string,
    link: string,
    logo: string,
    price: number
}

enum ROLE {STAFF, MANAGER,USER,}

type User = {
    username: string,
    password: string,
    email: string,
    login: () => void,
    logout: () => void,
}

type Admin = User & {
    role: ROLE.MANAGER | ROLE.STAFF
}