export interface setStats{
    setStr: React.Dispatch<React.SetStateAction<number>>,
    setDex: React.Dispatch<React.SetStateAction<number>>,
    setCon: React.Dispatch<React.SetStateAction<number>>,
    setInt: React.Dispatch<React.SetStateAction<number>>,
    setWis: React.Dispatch<React.SetStateAction<number>>,
    setCha: React.Dispatch<React.SetStateAction<number>>
}
export interface setHealth{
    setHp: React.Dispatch<React.SetStateAction<number>>,
    setHpMax: React.Dispatch<React.SetStateAction<number>>,
    setHpTemp: React.Dispatch<React.SetStateAction<number>>
}
export interface setCombatStats{
    setInit: React.Dispatch<React.SetStateAction<number>>,
    setAC: React.Dispatch<React.SetStateAction<number>>,
    setSpd: React.Dispatch<React.SetStateAction<number>>
}