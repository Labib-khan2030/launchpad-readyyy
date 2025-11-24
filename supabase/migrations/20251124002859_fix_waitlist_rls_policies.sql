/*
  # Fix Waitlist RLS Policies

  The current RLS policies on the waitlist table are incorrectly configured,
  preventing public users from reading the list of joined users.

  Changes:
  - Drop existing restrictive policies
  - Create new permissive policies allowing public SELECT and INSERT
  - Enables anonymous users to view the joiners list and submit their info
*/

DROP POLICY IF EXISTS "Allow public inserts for waitlist" ON waitlist;
DROP POLICY IF EXISTS "Allow public selects for waitlist" ON waitlist;

CREATE POLICY "Allow public to read waitlist"
  ON waitlist
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public to join waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);