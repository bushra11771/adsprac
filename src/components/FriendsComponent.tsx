import React, { useState, useEffect } from 'react';
import '../App.css';
// import Hamster from '../icons/Hamster';
import AdxcorpCoin from "../images/MainCoin.png"
import { binanceLogo, dollarCoin, hamsterCoin, mainCharacter } from '../images';
// import Info from '../icons/Info';
// import Settings from '../icons/Settings';
import Friends from '../icons/Friends';
import Coins from '../icons/Coins';
import { useNavigate } from 'react-router-dom';

const FriendsComponent: React.FC = () => {
    let navigate = useNavigate()

    return (
        <div className="bg-black flex justify-center">
            <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">

                <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow">
                    <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
                    <div className='' >
                        <button className="border-2 border-white bg-transparent rounded-lg px-4 py-2 text-white">
                                Invite a friend
                            </button>
                            <button className="border-2 border-white bg-transparent rounded-lg px-4 py-2 text-white">
                                Copy Link
                            </button>

                        </div>
                    </div>
                </div>
            </div>

            

            {/* Bottom fixed div */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
            
                <div onClick={() => {
                    navigate("/")
                }} className="cursor-pointer text-center text-[#85827d] w-1/5">
                    <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
                    <p className="mt-1">Exchange</p>
                </div>
                <div onClick={() => {
                    navigate("/friends")
                }} className="text-center text-[#85827d] w-1/5 cursor-pointer bg-[#1c1f24] m-1 p-2 rounded-2xl">
                    <Friends className="w-8 h-8 mx-auto" />
                    <p className="mt-1">Friends</p>
                </div>
                <div onClick={() => {
                    navigate("/earn")
                }} className="text-center text-[#85827d] w-1/5 cursor-pointer">
                    <Coins className="w-8 h-8 mx-auto" />
                    <p className="mt-1">Tasks</p>
                </div>
                <div onClick={() => {
                    navigate("/airdrop")
                }} className="cursor-pointer text-center text-[#85827d] w-1/5">
                    <img src={AdxcorpCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
                    <p className="mt-1">Airdrop</p>
                </div>
            </div>
        </div>
    );
};

export default FriendsComponent