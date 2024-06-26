import Image from "next/image";
import Page from "@/components/utility/page";
import Story from "@/components/sections/story";
import HeroPictSide from "@/components/sections/hero_right_pict";
import Gallery from "@/components/sections/gallery";
import MenuImg from "@/components/sections/menu_img";
import OpeningTimeAndLocationMap from "@/components/sections/opening_time_and_location_map";
import ContactAndInfo from "@/components/sections/contact_and_info";

// Data import
import {business_data} from "@/data/business-data"

export default function MenuPage() {

  return (
    <Page currentPage="Menu" business={business_data.business} navigation={business_data.website_content.navigation}>
      {/* SECTION TO BUILD & CONNECT */}
      <MenuImg content={business_data.website_content.sections.menu_img}/>
    </Page>
  );
}
