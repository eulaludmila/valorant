'use client'
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

import { CardAgent } from "../CardAgent"
import { IAgent } from "@/types/Agent"

import styles from './styles.module.scss'
import { loadAgents } from "@/utils/loadAgents"


const configSwiper = {
  spaceBetween: 16,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    798: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    966: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
}

export const Agents = () => {
  const [agents, setAgents] = useState<IAgent[]>([])
  const loadData = async () => {
    const data = await loadAgents()
    setAgents(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Swiper className={styles.agents} {...configSwiper}>
    {
      agents.map((agent, key) => <SwiperSlide key={key} >
        <CardAgent {...agent} />
      </SwiperSlide>)
    }
  </Swiper>
  )
}