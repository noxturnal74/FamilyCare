'use client'

import { useState } from 'react'
import { Users, Calendar, Heart, Activity, Baby, Shield, Bell, ChevronRight, UserPlus, HeartHandshake, CheckCircle } from 'lucide-react'

interface FamilyMember {
  id: number
  name: string
  relation: string
  age: number
  avatarInitial: string
  status: string
  color: string
  bgLight: string
  details: {
    bloodType: string
    allergies: string
    vaccines: string[]
    lastCheckup: string
  }
}

export default function FamilyCareHome() {
  const [selectedMemberId, setSelectedMemberId] = useState<number>(1)
  const [members, setMembers] = useState<FamilyMember[]>([
    { 
      id: 1, 
      name: 'Eleanor', 
      relation: 'Mother (Self)', 
      age: 45, 
      avatarInitial: 'EL', 
      status: 'Healthy', 
      color: 'bg-pink-500',
      bgLight: 'bg-pink-50 dark:bg-pink-950/20 border-pink-100 dark:border-pink-900/30',
      details: {
        bloodType: 'O+',
        allergies: 'None',
        vaccines: ['Influenza 2024', 'COVID-19 Booster'],
        lastCheckup: 'Jan 15, 2025'
      }
    },
    { 
      id: 2, 
      name: 'David', 
      relation: 'Father', 
      age: 48, 
      avatarInitial: 'DA', 
      status: 'Check-up Due', 
      color: 'bg-blue-500',
      bgLight: 'bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/30',
      details: {
        bloodType: 'A-',
        allergies: 'Peanuts',
        vaccines: ['Influenza 2024', 'Tetanus Booster'],
        lastCheckup: 'May 10, 2024'
      }
    },
    { 
      id: 3, 
      name: 'Emma', 
      relation: 'Daughter', 
      age: 12, 
      avatarInitial: 'EM', 
      status: 'Healthy', 
      color: 'bg-purple-500',
      bgLight: 'bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30',
      details: {
        bloodType: 'O+',
        allergies: 'Penicillin',
        vaccines: ['MMR Vaccine', 'HPV Vaccine Series'],
        lastCheckup: 'Feb 12, 2025'
      }
    },
    { 
      id: 4, 
      name: 'Jake', 
      relation: 'Son', 
      age: 8, 
      avatarInitial: 'JA', 
      status: 'Vaccination Due', 
      color: 'bg-amber-500',
      bgLight: 'bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30',
      details: {
        bloodType: 'O+',
        allergies: 'Dust mites',
        vaccines: ['DTaP Vaccine', 'MMR Booster'],
        lastCheckup: 'Oct 20, 2024'
      }
    }
  ])

  const [newName, setNewName] = useState('')
  const [newRelation, setNewRelation] = useState('')
  const [newAge, setNewAge] = useState('')

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newRelation.trim() || !newAge.trim()) return

    const newMem: FamilyMember = {
      id: Date.now(),
      name: newName,
      relation: newRelation,
      age: parseInt(newAge),
      avatarInitial: newName.substring(0,2).toUpperCase(),
      status: 'Healthy',
      color: 'bg-emerald-500',
      bgLight: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30',
      details: {
        bloodType: 'Unknown',
        allergies: 'None',
        vaccines: ['General Checkup Done'],
        lastCheckup: 'Just Added'
      }
    }

    setMembers([...members, newMem])
    setSelectedMemberId(newMem.id)
    setNewName('')
    setNewRelation('')
    setNewAge('')
    alert('New family profile created successfully!')
  }

  const selectedMember = members.find(m => m.id === selectedMemberId) || members[0]

  return (
    <div className="min-h-screen bg-[#F2F2F7] dark:bg-[#000000] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-[#1C1C1E] border-b border-gray-200/50 dark:border-gray-800/50 p-4 sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-[#1C1C1E]/80">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FF9500] to-[#FF6B00] flex items-center justify-center shadow-lg shadow-orange-500/10">
              <Users className="text-white" size={26} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-[#000000] dark:text-[#FFFFFF]">FamilyCare</h1>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Family Health Center</p>
            </div>
          </div>
          <button className="relative p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#FF9500] rounded-full"></span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Welcome Dashboard */}
        <section className="bg-gradient-to-br from-[#FF9500] to-[#FF6B00] rounded-3xl p-6 text-white shadow-xl">
          <h2 className="text-2xl font-extrabold mb-1">Family Health Status</h2>
          <p className="text-white/95 mb-4">Monitor vitals, track vaccination dates, and schedule clinical appointments.</p>
          <div className="flex gap-4">
            <div className="bg-white/20 rounded-2xl px-5 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-black">{members.length}</div>
              <div className="text-[10px] uppercase font-bold text-white/80">Members</div>
            </div>
            <div className="bg-white/20 rounded-2xl px-5 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-black">
                {members.filter(m => m.status.toLowerCase().includes('due')).length}
              </div>
              <div className="text-[10px] uppercase font-bold text-white/80">Pending Tasks</div>
            </div>
            <div className="bg-white/20 rounded-2xl px-5 py-3 text-center backdrop-blur-sm">
              <div className="text-2xl font-black">O+</div>
              <div className="text-[10px] uppercase font-bold text-white/80">Dominant Blood</div>
            </div>
          </div>
        </section>

        {/* Member Selector Grid */}
        <section>
          <h3 className="text-lg font-bold mb-3 text-[#000000] dark:text-[#FFFFFF]">Family Member Profiles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMemberId(member.id)}
                className={`p-4 rounded-3xl text-left border transition-all flex flex-col justify-between h-32 ${
                  selectedMemberId === member.id 
                    ? `bg-white dark:bg-[#1C1C1E] border-[#FF9500] shadow-md shadow-orange-500/5 ring-2 ring-[#FF9500]/50`
                    : 'bg-white dark:bg-[#1C1C1E] border-gray-200/50 dark:border-gray-800 hover:scale-[1.02]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${member.color} flex items-center justify-center text-white font-black text-sm`}>
                    {member.avatarInitial}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-black dark:text-white leading-tight">{member.name}</h4>
                    <p className="text-xs text-gray-500">{member.relation}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${
                    member.status === 'Healthy' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400' 
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Member Detail Panel */}
        {selectedMember && (
          <section className={`rounded-3xl p-6 border transition-all ${selectedMember.bgLight}`}>
            <h3 className="text-xl font-black text-[#000000] dark:text-[#FFFFFF] flex items-center gap-2 mb-4">
              <HeartHandshake className="text-[#FF9500]" /> {selectedMember.name}'s Medical Profile
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vitals Summary */}
              <div className="bg-white dark:bg-gray-850 p-5 rounded-2xl space-y-3 shadow-sm border border-gray-150/40">
                <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider">Quick Details</h4>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Blood Type</span>
                  <span className="font-extrabold text-[#FF2D55] bg-red-50 dark:bg-red-950/20 px-2 py-1 rounded-lg text-xs">{selectedMember.details.bloodType}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Allergies</span>
                  <span className="font-bold text-sm text-black dark:text-white">{selectedMember.details.allergies}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Last Check-up</span>
                  <span className="font-bold text-sm text-black dark:text-white">{selectedMember.details.lastCheckup}</span>
                </div>
              </div>

              {/* Vaccines */}
              <div className="bg-white dark:bg-gray-850 p-5 rounded-2xl space-y-3 shadow-sm border border-gray-150/40">
                <h4 className="font-bold text-xs uppercase text-gray-400 tracking-wider">Recent Immunizations</h4>
                <div className="space-y-2">
                  {selectedMember.details.vaccines.map((vac, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-2.5 rounded-xl">
                      <CheckCircle className="text-green-500 shrink-0" size={16} />
                      <span className="font-medium">{vac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Add Family Profile Form */}
        <section className="bg-white dark:bg-[#1C1C1E] rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800/80">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-[#000000] dark:text-[#FFFFFF]">
            <UserPlus className="text-[#FF9500]" size={22} /> Add a New Family Member Profile
          </h3>
          <form onSubmit={handleAddMember} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Name"
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                required
              />
              <input
                type="text"
                value={newRelation}
                onChange={e => setNewRelation(e.target.value)}
                placeholder="Relation (e.g. Son, Daughter, Aunt)"
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                required
              />
              <input
                type="number"
                value={newAge}
                onChange={e => setNewAge(e.target.value)}
                placeholder="Age"
                className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#000000] dark:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#FF9500]"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#FF9500] hover:bg-[#FF6B00] text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-orange-500/10">
              Create Family Profile
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
