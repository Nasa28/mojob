export interface IPage<T> {
  // count: Contains the total count of all objects T in all pages
  count?: number;
  // next: The url of the next page. Will be null if we have retrieved the last page.
  // ATTENTION: THIS FIELD IS BUGGED!!
  // The bug is that the url we get here is using "http" instead of "https"
  // So if you want to use this field remember to replace http with https else the API
  // will fail to respond with the correct data.
  // Sorry for the inconvenience. Maybe you can help us fix this bug later? :)
  next?: string;
  // prev: The url of the previous page. Will be null if we have retrieved the first page.
  prev?: string;
  // results: Contains the list of data objects
  results?: T[];
}

export interface JobListing {
  id?: number;
  job?: Job;
  created_at?: string;
  updated_at?: string;
  global_background_rgba?: string;
  global_text_style?: string;
  global_divider_status?: boolean;
  job_listing_header?: JobListingHeader;
  publisher_published_at?: string;
  publisher_modified_at?: string;
  job_listing_description?: JobListingDescription;
  job_listing_unit_description?: JobListingUnitDescription;
  youtube_video_ids?: string;
  vimeo_video_ids?: string;
  image_urls?: string[];
}

// These are address components we attach to a job
// when the job address is set. If you want to read more about them
// https://developers.google.com/maps/documentation/geocoding/overview
export enum jobLocationType {
  country_long_name = 'country_long_name',
  administrative_area_level_1 = 'administrative_area_level_1',
  administrative_area_level_2 = 'administrative_area_level_2',
  postal_town = 'postal_town',
}

export interface JobLocation {
  type?: jobLocationType;
  name?: string;
  num_live_jobs?: number;
  children?: JobLocation[];
}

export interface Unit {
  id?: number;
  name?: string;
  display_name?: string;
  address?: string;
  logo_url?: string;
}

export interface UserProfile {
  id?: number;
  profile_picture_url?: string;
}

export interface Poster {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  user_profile?: UserProfile;
}

/**
 * Position functions are a way of categorizing and organizing
 * jobs posted on Mojob.
 *
 * We use the International Standard Classification of Occupations (ISCO)
 * https://en.wikipedia.org/wiki/International_Standard_Classification_of_Occupations
 */
export interface PositionFunction {
  id?: number;
  name_en?: string;
  name_nb?: string;
  children?: PositionFunction[];
}

export interface Job {
  id?: number;
  due_date?: string;
  title?: string;
  unit?: Unit;
  address?: string;
  poster?: Poster;
  position_function_id?: number;
  position_function?: PositionFunction;
  country_long_name?: string;
  administrative_area_level_1?: string;
  administrative_area_level_2?: string;
  postal_town?: string;
  employment_type?: string;
  get_share_url?: string;
  apply_url?: string;
}

export interface JobListingHeader {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingUnitDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SelectProps {
    handlePageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface CheckBoxProps {
    handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
